import {Module} from "@nestjs/common";
import {ConfigModule} from "@nestjs/config";

import {config} from "./config";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import {AuthModule} from "./modules/auth/auth.module";
import {UserModule} from "./modules/user/user.module";
import {TokenModule} from "./modules/token/token.module";
import {RoleModule} from "./modules/role/role.module";
import {UserRoleModule} from "./modules/user_role/user_role.module";
import {ClinicModule} from "./modules/clinic/clinic.module";
import {DoctorModule} from "./modules/doctor/doctor.module";
import {ServiceModule} from "./modules/service/service.module";
import {DoctorServiceModule} from "./modules/doctor_service/doctor_service.module";
import { DoctorClinicModule } from './modules/doctor_clinic/doctor_clinic.module';

@Module({
    imports: [ConfigModule.forRoot({
        isGlobal: true,
        load: [config],
    }),
        UserModule,
        AuthModule,
        TokenModule,
        ClinicModule,
        RoleModule,
        UserRoleModule,
        DoctorModule,
        ServiceModule,
        DoctorServiceModule,
        DoctorClinicModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
