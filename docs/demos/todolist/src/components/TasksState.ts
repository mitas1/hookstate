import {
    createState,
    useState
} from "@hookstate/core";

export interface Task {
    id: string;
    name: string;
    done: boolean;
}

const fetchFromApi = async () => {
    // Just an example
    await fetch(
        "https://raw.githubusercontent.com/avkonst/hookstate/master/CNAME"
    );

    return [
        {
            id: "1",
            name: "Discover Hookstate",
            done: true,
        },
        {
            id: "2",
            name: "Replace Redux by Hookstate",
            done: false,
        },
        {
            id: "3",
            name: "Enjoy simpler code and faster application",
            done: false,
        },
    ];
};

const state = createState<Task[]>(fetchFromApi());

export function useTasksState() {
    // This function exposes the state directly.
    // i.e. the state is accessible directly outside of this module.
    // The state for settings in SettingsState.ts wraps the state by an interface.
    // Both options are valid and you need to use one or another,
    // depending on your circumstances. Apply your engineering judgement
    // to choose the best option. If unsure, exposing the state directly
    // like it is done below is a safe bet.
    return useState(state);
}
