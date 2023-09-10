import { Injectable } from '@nestjs/common';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { User } from 'src/@generated';
import { UserEvents } from './enum/user-event.enum';
import { TransactionEvents } from './enum/transaction-event.enum';

@Injectable()
export class UserListener {
  constructor(private eventEmitter: EventEmitter2) {}

  @OnEvent(UserEvents.Created)
  OnUserCreatedEvent(user: User) {
    //TODO:
    /* 
    1. Save no notification
    2. email verification,whatsapp verification
    3. notify referee & admin
    */
  }

  @OnEvent(UserEvents.Updated)
  OnUserUpdated(user: User) {
    //TODO:
    /* 

    */
  }

  @OnEvent(UserEvents.Deleted)
  OnUserDeleted(user: User | User[]) {
    //TODO:
    /* 
1. release hotel,program quota
    */
  }

  @OnEvent(UserEvents.StatusUpdatedToActive)
  async OnUserStatusUpdatedToActiveEvent(user: User) {
    //TODO:
    /* 
    1. send user notification about order status
    2. send notification to admin
    */

    //send point to referee user
    if (user.referredById) {
      this.eventEmitter.emit(
        TransactionEvents.TransactionCreateOneOfSendPointToRefereeUserEvent,
        user.referredById,
      );
    }
  }
}
