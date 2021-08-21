export interface PlayerBuilder {
    /**
     * 
     * @param player Player you are searching
     * @param itemIdentifier Item you are looking for
     * @param itemData Item data you are looking for
     * @example getItemCount('minecraft:diamond', '0', 'notbeer');
     */
    getItemCount(itemIdentifier: String, itemData: Number, player?: String): Array<getItemCountReturn> | null;
}

interface getItemCountReturn {
    player: String,
    count: Number
}