import React from 'react'
import UserDashboardLayout from '../../../layout/UserDashboardLayout'
import DashboardHomeInterface from '../../../components/user-dashboard-components/main-dashboard-page-components/DashboardHomeInterface'

export default function MainUserDashboardPage() {
  return (
    <>
    <UserDashboardLayout>
        <DashboardHomeInterface />
    </UserDashboardLayout>
    </>
  )
}
