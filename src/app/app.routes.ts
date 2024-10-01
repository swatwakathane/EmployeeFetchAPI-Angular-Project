import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ProjectComponent } from './components/project/project.component';
import { ProjectEmployeeComponent } from './components/project-employee/project-employee.component';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path:'login',
        component:LoginComponent,

    },
    {
        path:'',
        component:LayoutComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'employee',
                component: EmployeeComponent
            },
            {
                path: 'projects',
                component: ProjectComponent
            },
            {
                path: 'project-employee',
                component: ProjectEmployeeComponent
            }
        ]
    }

];
