import { deleteItem } from "../api/items.js";
import page from "../lib/page.js";

export default function removeItem(ctx) {

    let userConfirmation = confirm('Are you sure?');
    if (userConfirmation) {
        deleteItem(ctx.params.itemId);
        page.redirect('/dashboard');
    } else {
        return;
    }
}