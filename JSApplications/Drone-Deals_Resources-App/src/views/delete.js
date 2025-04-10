import { deleteItemReq } from "../api/items.js"
import page from "../lib/page.js";

export const deleteItem = (ctx) => {
    try {
        if (window.confirm('Are you sure?')) {
            deleteItemReq(ctx.params.id);
            page.redirect('/dashboard');
        }

    } catch (err) {
        return alert(err.message)
    }
}