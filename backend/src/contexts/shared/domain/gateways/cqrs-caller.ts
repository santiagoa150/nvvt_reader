import { ICommand, IEvent, IQuery } from '@nestjs/cqrs';
import { CqrsConfig } from '../cqrs.config';

/**
 * Interface defining methods for calling and dispatching CQRS (Command Query Responsibility Segregation) operations.
 * @interface
 */
export interface CqrsCaller {

    /**
     * Dispatches a command using CQRS.
     * @template R
     * @param {ICommand} command - The command to dispatch.
     * @param {CqrsConfig} [options] - Optional configuration for the command dispatch.
     * @returns {Promise<R>} - Resolves with the result of the command execution.
     */
    dispatch<R = unknown>(command: ICommand, options?: CqrsConfig): Promise<R>;

    /**
     * @template R
     * Executes a query using CQRS.
     * @param {IQuery} query - The query to execute.
     * @param {CqrsConfig} [options] - Optional configuration for the query execution.
     * @returns {Promise<R>} - Resolves with the result of the query execution.
     */
    query<R = unknown>(query: IQuery, options?: CqrsConfig): Promise<R>;

    /**
     * Emits an event using CQRS.
     * @param {IEvent} event - The event to emit.
     * @param {CqrsConfig} [options] - Optional configuration for emitting the event.
     * @returns {Promise<void>} - Resolves after emitting the event.
     */
    emit(event: IEvent, options?: CqrsConfig): Promise<void>;
}