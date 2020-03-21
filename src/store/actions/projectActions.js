export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //make async call to database
        const state = getState();
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: state.firebase.profile.firstName,
            authorLastName: state.firebase.profile.lastName,
            authorId: state.firebase.auth.uid,
            createdAt: new Date()
        }).then(() => {
            dispatch({
                type: "CREATE_PROJECT",
                project
            });
        }).catch((err) => {
            dispatch({
                type: "CREATE_PROJECT_ERROR",
                err
            });
        });
    }
};