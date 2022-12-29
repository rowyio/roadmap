import type {
  QueryDocumentSnapshot,
  DocumentSnapshot,
} from "firebase-admin/firestore";
import type { VotesSummary } from "~/types";
import { User } from "./User";

export class RoadmapItem {
  constructor(
    readonly id: string,
    readonly feature: string,
    readonly description: string,
    readonly status: string,
    readonly targetRelease: Date,
    readonly votesSummary: VotesSummary,
    readonly createdBy: User,
    readonly updatedBy: User
  ) {}

  static fromFirestore(
    snapshot: QueryDocumentSnapshot | DocumentSnapshot
  ): RoadmapItem {
    const data = snapshot.data();
    if (!data) {
      throw new Error("Invalid RoadmapItem");
    }
    return new RoadmapItem(
      snapshot.ref.id,
      data.feature,
      data.description,
      data.status,
      data.targetRelease?.toDate(),
      data.votesSummary,
      User.fromAuditField(data._createdBy),
      User.fromAuditField(data._updatedBy)
    );
  }

  static toClient(roadmapItem: RoadmapItem): any {
    const { createdBy, updatedBy, ...clientRoadmapItem } = roadmapItem;
    return clientRoadmapItem;
  }
}
