import page from "../../node_modules/page/page.mjs";
import { dataService } from "../service/dataService.js";

export function deleteItem(ctx) {

    const isConfirmed = confirm('Are you sure you want to delete this item?');
    if (isConfirmed) {
        // console.log(id);

        dataService.deleteFurniture(ctx.params.productId);
        page.redirect('/');

    }
}
