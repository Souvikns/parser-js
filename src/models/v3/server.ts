import { BaseModel } from "models/base";
import { BindingsMixin, DescriptionMixin, Mixin, SpecificationExtensionsMixin } from "models/mixins";
import { ServerInterface } from "models/server";
import { ServerSecurityRequirementInterface } from "models/server-security-requirement";
import { ServerVariableInterface } from "models/server-variables";
import { createMapOfTypes, getMapValueOfType } from "models/utils";
import { ServerSecurityRequirement } from "./server-recurity-requirement";
import { ServerVariable } from "./server-variable";


export class Server extends Mixin(BaseModel, BindingsMixin, DescriptionMixin, SpecificationExtensionsMixin) implements ServerInterface {
    url(): string {
        return this.json('url');
    }

    protocol(): string {
        return this.json('protocol');
    }

    protocolVersion(): string {
        return this.json('protocolVersion');
    }

    variables(): Record<string, ServerVariableInterface> {
        return createMapOfTypes(this.json('variables'), ServerVariable);
    }

    variable(name: string): ServerVariableInterface {
        return getMapValueOfType(this.json('variables'), name, ServerVariable);
    }

    hasVariables(): boolean {
        return !!this.json('variables');
    }

    security(): [ServerSecurityRequirementInterface] | undefined {
        return this.json('security').map((sec: any) => new ServerSecurityRequirement(sec))
    }
}
