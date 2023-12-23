import { ApiProperty } from '@nestjs/swagger';

export class DefaultHttpResponse {
    @ApiProperty({ type: Boolean }) success: boolean = true;
}