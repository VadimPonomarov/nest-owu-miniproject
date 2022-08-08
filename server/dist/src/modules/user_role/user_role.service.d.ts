import { PrismaService } from "../../core/prisma.service";
import { CreateUserRoleDto, UpdateUserRoleDto } from "./dto";
export declare class UserRoleService {
    private _prismaService;
    constructor(_prismaService: PrismaService);
    create(createUserRoleDto: CreateUserRoleDto): Promise<CreateUserRoleDto>;
    findAll(): Promise<CreateUserRoleDto[]>;
    findAllByEmail(email: string): Promise<CreateUserRoleDto[]>;
    updateOne(userRole: CreateUserRoleDto, updateUserRole: UpdateUserRoleDto): Promise<CreateUserRoleDto>;
    removeOne(userRole: CreateUserRoleDto): Promise<CreateUserRoleDto>;
}
