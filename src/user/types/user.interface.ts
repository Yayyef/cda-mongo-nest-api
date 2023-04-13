import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class UserModel {
    @ApiPropertyOptional({ type: Number })
    id?: number;
    @ApiProperty({ type: String })
    firstName: string;
    @ApiProperty({ type: String })
    lastName: string;
}
