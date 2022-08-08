import { PrismaService } from "../../core/prisma.service";
import { CreateRoleDto, UpdateRoleDto } from "./dto";
export declare class RoleService {
    private _prismaService;
    constructor(_prismaService: PrismaService);
    create(createRoleDto: CreateRoleDto): Promise<CreateRoleDto>;
    findAll(): Promise<CreateRoleDto[]>;
    findOne(roleName: string): Promise<CreateRoleDto>;
    update(roleName: string, updateRoleDto: UpdateRoleDto): Promise<CreateRoleDto>;
    remove(roleName: string): Promise<CreateRoleDto>;
}
