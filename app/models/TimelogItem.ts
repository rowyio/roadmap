import type {
  QueryDocumentSnapshot,
  DocumentSnapshot,
} from "firebase-admin/firestore";
import { User } from "./User";

export class TimelogItem {
  constructor(readonly actor: User, readonly changedFields: any[]) {}

  static fromFirestore(
    snapshot: QueryDocumentSnapshot | DocumentSnapshot
  ): TimelogItem {
    const data = snapshot.data();
    if (!data) {
      throw new Error("Invalid Timelog");
    }
    return new TimelogItem(User.fromAuditField(data.actor), data.changedFields);
  }

  static toClient(timelogItem: TimelogItem): any {
    return {
      actor: User.toClient(timelogItem.actor),
      changedFields: timelogItem.changedFields,
    };
  }
}
