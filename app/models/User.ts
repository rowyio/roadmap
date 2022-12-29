import type { DocumentData } from "firebase-admin/firestore";
import type { DecodedIdToken } from "firebase-admin/auth";

export class ClientUser {
  constructor(
    readonly displayName: string,
    readonly photoURL: string,
    readonly date?: Date
  ) {}
}

export class User {
  constructor(
    readonly displayName: string,
    readonly email: string,
    readonly emailVerified: boolean,
    readonly photoURL: string,
    readonly roles: String[],
    readonly uid: string,
    // required for audit fields
    readonly date?: Date
  ) {}

  static fromAuditField(data: DocumentData): User {
    return new User(
      data.displayName,
      data.email,
      data.emailVerified,
      data.photoURL,
      data.roles,
      data.uid,
      // required for audit fields
      data.timestamp?.toDate()
    );
  }
  static fromDecodedIdToken(decodedIdToken: DecodedIdToken): User {
    return new User(
      decodedIdToken.name,
      decodedIdToken.email ?? "",
      decodedIdToken.email_verified ?? false,
      decodedIdToken.picture ?? "",
      decodedIdToken.roles ?? [],
      decodedIdToken.uid
    );
  }
  static toFirestore(user: User): any {
    return {
      displayName: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      photoURL: user.photoURL,
      roles: user.roles,
      uid: user.uid,
    };
  }

  static toClient(user: User): ClientUser {
    return {
      displayName: user.displayName,
      photoURL: user.photoURL,
      date: user.date,
    };
  }
}
