import { Ability } from '@casl/ability';
import { PermitInit, permitPermissionState } from 'permit-fe-sdk';


export const getAbility = async () => {
const permit = PermitInit("test@ets.ser", "http://localhost:4000/", false);
await permit.loadLocalState([{ action: "create", resource: "board" }, { action: "update", resource: "board" }]).then((state: any) => {
    console.log(permitPermissionState.getCaslJson())
});
return permitPermissionState.getCaslJson();
// return new Ability([  {
//     action: 'create',
//     subject: 'board'
//   },
// ]);
}

