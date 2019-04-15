import * as React from "react";
import { shallow, mount } from "enzyme";
import * as renderer from "react-test-renderer";

import { <%=tabReactComponentName%> } from "../<%=tabReactComponentName%>";
import { ThemeStyle } from "msteams-ui-styles-core";

describe("<%=tabReactComponentName%> Component", () => {
    // Snapshot Test Sample
    it("should match the snapshot", () => {
        const tree = renderer.create(<<%=tabReactComponentName%> />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    // Component Test Sample
    it("should render the tab", () => {
        const component = shallow(<<%=tabReactComponentName%> />);
        const divResult = component.containsMatchingElement(<div>This is your tab</div>);

        expect(divResult).toBeTruthy();
    });

    // Mocking Sample
    it("should show alert on button click", () => {
        window.alert = jest.fn();

        const component = mount(<<%=tabReactComponentName%> />);
        const button = component.find("button");
        button.simulate("click");

        expect(window.alert).toHaveBeenCalledWith("It worked!");

        component.unmount();
    });
});

