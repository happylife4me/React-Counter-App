import {SAVE_COMMENT} from "../Actions/ActionType";

import {saveComment} from "./index"


describe('actions', () => {
    describe('saveComment', () => {
        it("has the correct type", () => {
            const action = saveComment();
            expect(action.type).toBe(SAVE_COMMENT);
        })

        it("has the correct payload", () => {
            const action = saveComment("new comment");
            expect(action.payload).toBe("new comment");
        })

        
    })
})