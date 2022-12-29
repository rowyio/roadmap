import type {
  QueryDocumentSnapshot,
  DocumentSnapshot,
  Timestamp,
} from "firebase-admin/firestore";
import { ClientUser, User } from "./User";

export class ClientVote {
  constructor(
    readonly vote: string,
    readonly comment: string,
    readonly createdAt: Timestamp,
    readonly createdBy: ClientUser
  ) {}
}

export class Vote {
  constructor(
    readonly vote: string,
    readonly comment: string,
    readonly email: string,
    readonly createdAt: Timestamp,
    readonly createdBy: User
  ) {}

  static fromFirestore(
    snapshot: QueryDocumentSnapshot | DocumentSnapshot
  ): Vote {
    const data = snapshot.data();
    if (!data) {
      throw new Error("Invalid RoadmapItem");
    }
    return new Vote(
      data.vote,
      data.comment,
      data.email,
      data._createdAt,
      User.fromAuditField(data._createdBy)
    );
  }
  static toFirestore(object: Vote) {}

  static toClient(object: Vote): ClientVote {
    const { email, createdBy, ...clientVote } = object;
    return {
      ...clientVote,
      createdBy: User.toClient(createdBy),
    };
  }
}
