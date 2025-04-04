import { deleteItem } from "../api/marketItems.js";
import page from "../lib/page.js";

export default async function removeItem(ctx) {

    const userConfirmation = confirm('Are you sure?');
    try {
        if (userConfirmation) {
            deleteItem(ctx.params.id);
            page.redirect('/market');
        }
    } catch (err) {
        return alert(err.message);
    }

}