import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { User } from 'src/@generated';

@Injectable()
export class UserListener {
  @OnEvent('user.created')
  OnUserCreatedEvent(user: User) {
    //TODO:
    /* 
    1. Save no notification
    2. email verification,whatsapp verification
    3. notify referee & admin
    */
  }

  @OnEvent('user.updated')
  OnUserUpdated(user: User) {
    //TODO:
    /* 

    */
  }

  @OnEvent('user.status.updated.to.active')
  OnUserStatusUpdatedToActiveEvent(user: User) {
    //TODO:
    /* 
    1. send user notification about order status
    2. send notification to admin
    3. send point to referee user
    */
  }
}
