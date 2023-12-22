import { CommandBus, EventBus, ICommand, IEvent, IQuery, QueryBus } from '@nestjs/cqrs';
import { CqrsConfig } from '../../domain/cqrs.config';
import { CqrsCaller } from '../../domain/gateways/cqrs-caller';
import { Injectable, Logger } from '@nestjs/common';

/**
 * Implementation of the CqrsCaller interface to interact with CQRS operations in a NestJS application.\
 * Uses CommandBus, QueryBus, and EventBus for dispatching commands, executing queries, and emitting events, respectively.
 * @class
 * @implements {CqrsCaller}
 */
@Injectable()
export class NestCqrsCaller implements CqrsCaller {

    private readonly logger: Logger = new Logger(NestCqrsCaller.name);

    /**
     * @constructor
     * @param {CommandBus} dispatcher - CommandBus instance for dispatching commands.
     * @param {QueryBus} consultant - QueryBus instance for executing queries.
     * @param {EventBus} emitter - EventBus instance for emitting events.
     */
    constructor(
        private readonly dispatcher: CommandBus,
        private readonly consultant: QueryBus,
        private readonly emitter: EventBus,
    ) {
    }

    /**
     * Dispatches a command using CommandBus.
     * @template R
     * @param {ICommand} command - The command to dispatch.
     * @param {CqrsConfig} [options] - Optional configuration for the command dispatch.
     * @returns {Promise<R>} - Resolves with the result of the command execution.
     * @public
     * @async
     */
    public async dispatch<R = unknown>(command: ICommand, options?: CqrsConfig): Promise<R> {
        const config: CqrsConfig = options ?? new CqrsConfig();
        if (config.showLogs) {
            let log: string = `[${this.dispatch.name}] INIT :: Dispatching Command :: ${command.constructor.name}`;
            if (config.showInit) log += ` :: ${JSON.stringify(command)}`;
            this.logger.log(log);
        }
        const data: R = await this.dispatcher.execute(command);
        if (config.showLogs) {
            let log: string = `[${this.dispatch.name}] FINISH :: Dispatched Command :: ${command.constructor.name}`;
            if (config.showResult) log += ` :: Result ${JSON.stringify(data)}`;
            this.logger.log(log);
        }
        return data;
    }

    /**
     * Executes a query using QueryBus.
     * @template R
     * @param {IQuery} query - The query to execute.
     * @param {CqrsConfig} [options] - Optional configuration for the query execution.
     * @returns {Promise<R>} - Resolves with the result of the query execution.
     * @public
     * @async
     */
    public async query<R = unknown>(query: IQuery, options?: CqrsConfig): Promise<R> {
        const config: CqrsConfig = options ?? new CqrsConfig();
        if (config.showLogs) {
            let log: string = `[${this.query.name}] INIT :: Executing query :: ${query.constructor.name}`;
            if (config.showInit) log += ` :: ${JSON.stringify(query)}`;
            this.logger.log(log);
        }
        const data: R = await this.consultant.execute(query);
        if (config.showLogs) {
            let log: string = `[${this.query.name}] FINISH :: Query Executed :: ${query.constructor.name}`;
            if (config.showResult) log += ` :: ${JSON.stringify(query)}`;
            this.logger.log(log);
        }
        return data;
    }

    /**
     * Emits an event using EventBus.
     * @param {IEvent} event - The event to emit.
     * @param {CqrsConfig} [options] - Optional configuration for emitting the event.
     * @returns {Promise<void>} - Resolves after emitting the event.
     * @public
     * @async
     */
    public async emit(event: IEvent, options?: CqrsConfig): Promise<void> {
        const config: CqrsConfig = options ?? new CqrsConfig();
        if (config.showLogs) {
            let log: string = `[${this.emit.name}] INIT :: Emitting Event :: ${event.constructor.name}`;
            if (config.showInit) log += ` :: ${JSON.stringify(event)}`;
            this.logger.log(log);
        }
        this.emitter.publish(event);
        if (config.showLogs) {
            this.logger.log(`[${this.emit.name}] FINISH :: Emitted Event :: ${event.constructor.name}`);
        }
    }
}