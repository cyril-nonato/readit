import React from 'react';

import { Route, Switch } from 'react-router-dom'
import SubReaditPostsPageContainer from '../sub-readit-posts-page/sub-readit-posts-page.container';
import SubReaditPostPageContainer from '../sub-readit-post-page/sub-readit-post-page.container';

const SubReaditPage = ({match}) => {
  
  return (
    <React.Fragment>
      <Switch>
        <Route exact path={`${match.path}/:subReadit`} component={SubReaditPostsPageContainer} />
        <Route path={`${match.path}/:subReadit/:id`} component={SubReaditPostPageContainer} />
      </Switch>
    </React.Fragment>
  );
}

export default SubReaditPage;