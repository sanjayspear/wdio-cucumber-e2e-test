Feature: Inventory

    @demo @smoke @debug
    Scenario Outline: <TestID> : Demo Inventory
        Given As a Problem User I login to inventory web app
            | UserType | Username                |
            | StdUser  | standard_user           |
            | ProbUser | problem_user            |
            | PerfUser | performance_glitch_user |

        Then Inventory page should list <NumberOfProducts> products
        Then Validate all products have valid price

        Examples:
            | TestID     | NumberOfProducts |
            | INTV_TC001 |       6          |