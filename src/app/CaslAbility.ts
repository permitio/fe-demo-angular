import { PermitInit, permitState } from 'permit-fe-sdk';


export const getAbility = async () => {
    const permit = PermitInit("test@test.com", "http://localhost:4000/", false);
    await permit.loadLocalStateBulk([{ action: "create", resource: "board" }, { action: "update", resource: "board" }]).then((state: any) => {
        console.log(permitState.getCaslJson())
    });
    return permitState.getCaslJson();
}

