import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BackofficeModule } from './modules/backoffice/backoffice.module';
import { AgendaModule } from './modules/agenda/agenda.module';
import { ReportsModule } from './modules/reports/reports.module';
import { ChatModule } from './modules/chat/chat.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.CONNECTION_STRING),
    BackofficeModule,
    AgendaModule,
    ReportsModule,
    ChatModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
