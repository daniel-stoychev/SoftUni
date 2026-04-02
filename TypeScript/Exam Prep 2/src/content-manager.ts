import { DetailedContent } from "./content-types";
import { Viewer } from "./models";

class ContentManager {
    private contentItems: DetailedContent[] = [];
    private viewers: Map<number, Viewer[]> = new Map();

    addContent(item: DetailedContent) {
        this.contentItems.push(item);
        this.viewers.set(item.id, []);
        return `Content "${item.title}" (ID: ${item.id}) has been added.`
    }

    // @NotifyOnSuccess(Email)
    markAsWatched(contentId: number, viewer: Viewer) {
        if (this.viewers.has(contentId)) {
            const viewerArr = this.viewers.get(contentId);
            viewerArr?.push(viewer);
            return `Viewer ${viewer} marked content ID ${contentId} as watched.`
        } else {
            return `ERROR: Content with ID ${contentId} not found.`
        }
    }

    listAllContent():string[] {
        let formatedArr: string[] = [];
        for (const item of this.contentItems) {
            const curItem = item.getDetails();
            formatedArr.push(curItem);
        }
        
    }

}


