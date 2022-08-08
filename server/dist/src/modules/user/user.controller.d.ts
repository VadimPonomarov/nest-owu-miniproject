import { UserService } from "./user.service";
import { CreateUserDto, UpdateUserDto } from "./dto";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(user: CreateUserDto): Promise<CreateUserDto>;
    findAll(query: any): Promise<import(".prisma/client").User[]>;
    findOne(data: string): Promise<import(".prisma/client").User>;
    update(data: string, updateUserDto: UpdateUserDto): Promise<import(".prisma/client").User>;
    remove(data: string): Promise<import(".prisma/client").User>;
}
