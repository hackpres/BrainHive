import {
    component$,
    useSignal,
    useStylesScoped$,
    useTask$,
  } from '@builder.io/qwik';
  import {
    routeLoader$,
    Form,
    routeAction$,
    server$,
  } from '@builder.io/qwik-city';
  import styles from './index.css?inline';

  let workspaceCode = "";
   
  export const useHiveWorkspace = routeLoader$(async () => {
    const options = {
        method: 'GET',
        headers: {accept: 'application/json', api_key: '5d4a3e646f3f48f535900fbabe9771a1'}
      };
      await fetch('https://app.hive.com/api/v1/workspaces?user_id=WCQGj45v87NQCC9hH', options)
        .then(response => response.json())
        .then(res => workspaceCode = res[0].id)
        .catch(err => console.error(err));
    });
   
  export default component$(() => {
    useStylesScoped$(styles);
    useHiveWorkspace();
    console.log(workspaceCode);
    return (
      <section class="section bright">
        <p>{workspaceCode}</p>

      </section>
    );
  });