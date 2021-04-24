import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Members from "./components/Member/members";
import CreateMember from "./components/Member/CreateMember";
import MemberDetails from "./components/Member/MemberDetails";
import ViewMember from "./components/Member/ViewMember";
import Structers from './components/Structer/structers';
import CreateStructer from './components/Structer/CreateStructer';
import StructerDetails from './components/Structer/StructerDetails';
import ViewStructer from './components/Structer/ViewStructer';

const routing = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} label="Home" />

      <Route path="/members" component={Members} />
      <Route path="/member/update" component={MemberDetails} />
      <Route path="/member/view" component={ViewMember} />
      <Route path="/member/new" component={CreateMember} />

      <Route path="/structers" component={Structers} />
      <Route path="/structer/update" component={StructerDetails} />
      <Route path="/structer/view" component={ViewStructer} />
      <Route path="/structer/new" component={CreateStructer} />
      
    </Switch>
  </div>
);
export default routing;




       