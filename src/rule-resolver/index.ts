import { ConfigRules, RuleApplications } from './../types';
import getRuleApplications from './get-rule-applications';
import filterRuleDefinitions from './filter-rule-definitions';
import getRuleDefinitions from './get-rule-definitions';

export { default as matchesRuleUsage } from './matches-rule-usage';

export default (
    rules: ConfigRules,
    rulesDir: string | undefined,
    rulesToVerify: string[] | undefined,
): RuleApplications => {
    const ruleDefinitions = getRuleDefinitions(rules, rulesDir);
    const filteredRuleDefinitions = filterRuleDefinitions(ruleDefinitions, rulesToVerify);
    const ruleApplications = getRuleApplications(rules, filteredRuleDefinitions, rulesToVerify);

    return ruleApplications;
};
