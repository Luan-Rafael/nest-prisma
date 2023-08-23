import { IsNotEmpty, Length } from "class-validator"

export class CreateTeamMemberBody {
    @IsNotEmpty()
    @Length(5, 100)
    name: string;

    @IsNotEmpty({
        message: "Possui um campo faltando"
    })
    @Length(5, 300)
    function: string;
}