export interface EntityBuilder {
    /**
     * 
     * @param searchTag Tag you are seraching for (WARNING: Color Coding with § is ignored)
     * @param target Requirements for the entity
     * @example findTag("Owner", '[type=player]');
     */
    findTag(searchTag: String, target?: String): Boolean;
    /**
     * 
     * @param target Requirements for the entity
     */
    getTags(target?: String): Array<String>;
    /**
     * 
     * @param objective Objective name you want to search
     * @param target Requirements for the entity
     * @param minimum Minumum score you are looking for
     * @param maximum Maximum score you are looking for
     * @example getScore('Money', { target: '[type=player,name="notbeer"]', minimum: 0 });
    */
    getScore(objective: String, target?: String, { minimum, maximum }?: { minimum: Number, maximum: Number }): Number | null;
}