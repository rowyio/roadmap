import type {
  QueryDocumentSnapshot,
  DocumentSnapshot,
} from "firebase-admin/firestore";

import { Vote } from "./Vote";

export class UserVote {
  constructor(readonly itemId: string, readonly vote: Vote) {}

  static fromFirestore(
    snapshot: QueryDocumentSnapshot | DocumentSnapshot
  ): UserVote {
    const data = snapshot.data();
    if (!data) {
      throw new Error("Invalid RoadmapItem");
    }
    const itemId = snapshot.ref.parent?.parent?.id;
    if (!itemId) {
      throw new Error("Vote must be a subcollection");
    }
    return new UserVote(itemId, Vote.fromFirestore(snapshot));
  }

  static toClient(userVote: UserVote) {
    return {
      ...userVote,
      vote: Vote.toClient(userVote.vote),
    };
  }
}
