export enum TransactionEvents {
  Created = 'transaction.created',
  Updated = 'transaction.updated',
  StatusUpdatedToCompleted = 'transaction.status.updated.to.completed',
  Deleted = 'transaction.deleted',
  CreatedOneOfUserPoint = 'transaction.create.one.of.userPoint',
  TransactionCreateOneOfSendPointToRefereeUserEvent = 'transaction.create.one.of.sendPointToRefereeUser',
}
