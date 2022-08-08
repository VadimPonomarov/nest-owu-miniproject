import { UserRoleService } from "./user_role.service";
import { CreateUserRoleDto, UpdateUserRoleDto } from "./dto";
export declare class UserRoleController {
    private readonly userRoleService;
    constructor(userRoleService: UserRoleService);
    create(createUserRoleDto: CreateUserRoleDto): Promise<CreateUserRoleDto>;
    findAll(): Promise<CreateUserRoleDto>;
    findAllByEmail(email: string): Promise<CreateUserRoleDto[]>;
    updateOne(userRole: CreateUserRoleDto, updateUserRoleDto: UpdateUserRoleDto): Promise<CreateUserRoleDto>;
    remove(userRole: CreateUserRoleDto): Promise<CreateUserRoleDto>;
}
