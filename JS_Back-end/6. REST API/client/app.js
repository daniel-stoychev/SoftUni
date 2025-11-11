const API_BASE = 'http://localhost:5000';

// --- Simple state ---
const state = {
    user: null, // { accessToken, username }
    posts: []
};

// --- DOM refs ---
const $ = selector => document.querySelector(selector);
const userInfo = $('#user-info');
const navLogin = $('#nav-login');
const navLogout = $('#nav-logout');
const navNewPost = $('#nav-newpost');

const loginSection = $('#login-section');
const loginForm = $('#login-form');
const loginCancel = $('#login-cancel');

const postFormSection = $('#post-form-section');
const postForm = $('#post-form');
const postCancel = $('#post-cancel');
const postFormTitle = $('#post-form-title');

const postsList = $('#posts-list');
const messages = $('#messages');

// --- Utilities ---
function showMessage(text, type = 'info', ttl = 3000) {
    messages.innerHTML = `<div class="message ${type}">${text}</div>`;
    if (ttl > 0) { setTimeout(() => { messages.innerHTML = ''; }, ttl); }
}

function setAuthHeader(headers = {}) {
    if (state.user && state.user.accessToken) {
        headers['Authorization'] = 'Bearer ' + state.user.accessToken;
    }
    return headers;
}

async function api(path, { method = 'GET', body = null, headers = {} } = {}) {
    const opts = { method, headers: setAuthHeader(headers) };
    if (body) {
        opts.headers['Content-Type'] = 'application/json';
        opts.body = JSON.stringify(body);
    }
    try {
        const res = await fetch(API_BASE + path, opts);
        const text = await res.text();
        let data = null;
        try { data = text ? JSON.parse(text) : null; } catch (e) { data = text; }
        if (!res.ok) {
            throw new Error(data && data.message ? data.message : res.statusText);
        }
        return data;
    } catch (err) {
        throw err;
    }
}

// --- Auth ---
function saveUser(user) {
    state.user = user;
    localStorage.setItem('spa_user', JSON.stringify(user));
    renderAuth();
}
function clearUser() {
    state.user = null;
    localStorage.removeItem('spa_user');
    renderAuth();
}
function loadSavedUser() {
    try {
        const raw = localStorage.getItem('spa_user');
        if (raw) state.user = JSON.parse(raw);
    } catch (e) { }
}

async function login(username, password) {
    try {
        const res = await api('/users/login', { method: 'POST', body: { username, password } });
        saveUser({ username, accessToken: res.accessToken });
        showMessage('Logged in successfully', 'info');
        hideLogin();
        await loadPosts();
    } catch (err) {
        showMessage('Login failed: ' + err.message, 'error', 5000);
    }
}

function logout() {
    clearUser();
    showMessage('Logged out', 'info');
}

// --- Posts ---
async function loadPosts() {
    try {
        const posts = await api('/posts');
        state.posts = posts || [];
        renderPosts();
    } catch (err) {
        showMessage('Failed to load posts: ' + err.message, 'error');
    }
}

async function createPost(data) {
    try {
        const created = await api('/posts', { method: 'POST', body: data });
        showMessage('Post created', 'info');
        hidePostForm();
        await loadPosts();
    } catch (err) {
        showMessage('Create failed: ' + err.message, 'error', 5000);
    }
}

// The API currently doesn't expose update/delete endpoints; we'll attempt to call them if they exist, otherwise show an error message.
async function updatePost(id, data) {
    try {
        const updated = await api(`/posts/${id}`, { method: 'PUT', body: data });
        showMessage('Post updated', 'info');
        hidePostForm();
        await loadPosts();
    } catch (err) {
        showMessage('Update failed: ' + err.message + ' (make sure API supports PUT /posts/:id)', 'error', 6000);
    }
}

async function deletePost(id) {
    if (!confirm('Delete this post?')) return;
    try {
        await api(`/posts/${id}`, { method: 'DELETE' });
        showMessage('Post deleted', 'info');
        await loadPosts();
    } catch (err) {
        showMessage('Delete failed: ' + err.message + ' (make sure API supports DELETE /posts/:id)', 'error', 6000);
    }
}

// --- UI ---
function renderAuth() {
    if (state.user) {
        userInfo.textContent = state.user.username;
        userInfo.classList.remove('hidden');
        navLogin.classList.add('hidden');
        navLogout.classList.remove('hidden');
        navNewPost.classList.remove('hidden');
    } else {
        userInfo.textContent = '';
        userInfo.classList.add('hidden');
        navLogin.classList.remove('hidden');
        navLogout.classList.add('hidden');
        navNewPost.classList.remove('hidden');
    }
}

function renderPosts() {
    postsList.innerHTML = '';
    if (!state.posts || state.posts.length === 0) {
        postsList.innerHTML = '<div class="panel">No posts yet</div>';
        return;
    }
    state.posts.forEach(p => {
        const el = document.createElement('div');
        el.className = 'post';
        const author = p.author && (p.author.username || p.author.email) ? (p.author.username || p.author.email) : (p.author ? p.author.toString() : 'Unknown');
        el.innerHTML = `
      <h3>${escapeHtml(p.title)}</h3>
      <p>${escapeHtml(p.content)}</p>
      <div class="meta">by <strong>${escapeHtml(author)}</strong></div>
      <div class="actions"></div>
    `;
        const actions = el.querySelector('.actions');
        const btnView = makeBtn('View', () => { showMessage(p.title + ': ' + p.content, 'info', 4000); });
        actions.appendChild(btnView);
        if (state.user) {
            const btnEdit = makeBtn('Edit', () => { openEditPost(p); });
            const btnDelete = makeBtn('Delete', () => { deletePost(p._id || p.id); });
            btnEdit.classList.add('btn', 'warn');
            btnDelete.classList.add('btn', 'danger');
            actions.appendChild(btnEdit);
            actions.appendChild(btnDelete);
        }
        postsList.appendChild(el);
    });
}

function makeBtn(text, onClick) {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'btn';
    b.textContent = text;
    b.addEventListener('click', onClick);
    return b;
}

function escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/[&<>"']/g, s => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[s]);
}

// --- Forms ---
function showLogin() { loginSection.classList.remove('hidden'); }
function hideLogin() { loginSection.classList.add('hidden'); loginForm.reset(); }

function showPostForm() { postFormSection.classList.remove('hidden'); }
function hidePostForm() { postFormSection.classList.add('hidden'); postForm.reset(); }

function openNewPost() {
    postFormTitle.textContent = 'New Post';
    postForm.id.value = '';
    postForm.title.value = '';
    postForm.content.value = '';
    showPostForm();
}

function openEditPost(p) {
    postFormTitle.textContent = 'Edit Post';
    postForm.id.value = p._id || p.id || '';
    postForm.title.value = p.title || '';
    postForm.content.value = p.content || '';
    showPostForm();
}

// --- Event bindings ---
navLogin.addEventListener('click', () => { showLogin(); });
navLogout.addEventListener('click', () => { logout(); });
navNewPost.addEventListener('click', () => { openNewPost(); });
loginCancel.addEventListener('click', () => { hideLogin(); });
postCancel.addEventListener('click', () => { hidePostForm(); });

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(loginForm);
    login(fd.get('username').trim(), fd.get('password'));
});

postForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(postForm);
    const id = fd.get('id');
    const data = { title: fd.get('title').trim(), content: fd.get('content').trim() };
    if (!data.title || !data.content) { showMessage('Fill all fields', 'error'); return; }
    if (id) { updatePost(id, data); } else { createPost(data); }
});

// --- Init ---
(function init() {
    loadSavedUser();
    renderAuth();
    loadPosts();
})();
