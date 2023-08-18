interface ComputedRegion {
  ":@computed_region_cbhk_fwbd"?: string | undefined;
  ":@computed_region_nnqa_25f4"?: string | undefined;
}

export interface StateType extends ComputedRegion {
  name: string;
  id: string;
  nametype?: string;
  recclass?: string;
  mass?: string;
  fall: string;
  year?: string;
  reclat?: string;
  reclong?: string;
  geolocation?: { latitude: string; longitude: string };
}

export interface ActionType {
  type: string;
  payload?: StateType;
}

const reducer = (state: StateType[], action: ActionType) => {
  switch (action.type) {
    case "HELLO":
      return { ...state };

    default:
      throw new Error("Unidentified reducer action type");
  }
};

export default reducer;
