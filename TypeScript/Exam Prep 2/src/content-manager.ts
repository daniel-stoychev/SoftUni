import { DetailedContent, findItemById } from "./content-types";
import { NotifyOnSuccess } from "./decorators";

import { ContentType, Viewer } from "./models";

export class ContentManager {
    private contentItems: DetailedContent[] = [];
    private viewers: Map<number, Viewer[]> = new Map();

    addContent(item: DetailedContent): string {
        this.contentItems.push(item);
        this.viewers.set(item.id, []);
        return `Content "${item.title}" (ID: ${item.id}) has been added.`
    }

    @NotifyOnSuccess('Email')
    // markAsWatched(contentId: number, viewer: Viewer) {
    //     if (this.viewers.has(contentId)) {
    //         const viewerArr = this.viewers.get(contentId);
    //         viewerArr?.push(viewer);
    //         return `Viewer ${viewer.name} marked content ID ${contentId} as watched.`
    //     } else {
    //         return `ERROR: Content with ID ${contentId} not found.`
    //     }
    // }
    markAsWatched(contentId: number, viewer: Viewer): string {
        if (this.viewers.has(contentId)) {
            const viewerArr = this.viewers.get(contentId);
            viewerArr?.push(viewer);
            return `Viewer ${viewer.name} marked content ID ${contentId} as watched.`;
        } else {
            return `ERROR: Content with ID ${contentId} not found.`;
        }
    }

    listAllContent():string[] {
        let formatedArr: string[] = [];
        for (const item of this.contentItems) {
            if (ContentType[item.type] === 'Movie') {
                formatedArr.push(`[${ContentType[item.type]}] "${item.title}" directed by ${item.getDetails()} (Released: ${item.releaseDate.getDate()}/${item.releaseDate.getMonth()+1}/${item.releaseDate.getFullYear()})`);
            } else {
                formatedArr.push(`[${ContentType[item.type]}] "${item.title}" (Released: ${item.releaseDate.getDate()}/${item.releaseDate.getMonth()+1}/${item.releaseDate.getFullYear()}), available at ${item.getDetails()}`);
            }
        }
        return formatedArr;
    }

    findContent(contentId: number) {
        return findItemById(this.contentItems, contentId);
    }

}


