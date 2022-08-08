import { RoleService } from "./role.service";
import { CreateRoleDto, UpdateRoleDto } from "./dto";
export declare class RoleController {
    private readonly roleService;
    constructor(roleService: RoleService);
    create(createRoleDto: CreateRoleDto): Promise<CreateRoleDto>;
    findAll(): Promise<CreateRoleDto[]>;
    findOne(roleName: string): Promise<CreateRoleDto>;
    update(roleName: string, updateRoleDto: UpdateRoleDto): Promise<CreateRoleDto>;
    remove(roleName: string): Promise<CreateRoleDto>;
}
