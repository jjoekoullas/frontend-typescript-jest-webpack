import "jest"

//Note - If any additional paths are added, they must also be added
//to the moduleNameMapper in jest.  https://www.npmjs.com/package/ts-jest#module-path-mapping
import { myTest } from 'app/test'

describe("Jest Tests", () => {
    test("Verify tests work", () => {
        expect(myTest()).toBeTruthy();
    })
})