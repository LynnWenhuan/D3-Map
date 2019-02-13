import React from 'react';
import { connect } from 'dva';
import MainLayout from '../components/MainLayout/MainLayout';

function IndexPage() {
  return <MainLayout />;
}

export default connect()(IndexPage);
