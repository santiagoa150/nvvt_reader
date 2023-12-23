/**
 * Configuration options for CQRS (Command Query Responsibility Segregation) handling.
 * @class
 */
export class CqrsConfigType {
    /**
     * Determines whether to display initialization information.
     * @type {boolean}
     * @default true
     */
    showInit?: boolean = true;
    /**
     * Determines whether to display result information.
     * @type {boolean}
     * @default true
     */
    showResult?: boolean = true;
    /**
     * Determines whether to display log information.
     * @type {boolean}
     * @default true
     */
    showLogs?: boolean = true;
}