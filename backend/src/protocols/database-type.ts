import { Donation } from "./donate-type"
import { Help } from "./help-type"
import { Session } from "./session-type"
import { User } from "./user-type"

export type Database = {
    user: User[],
    help: Help[],
    donation: Donation[],
    session: Session[]
}