export default function (side=false) {
    const projects = ref([] as ProjectT[])

    queryCollection('projects')
        .where('side', '=', side)
        .all()
        .then(res=> projects.value = res)
    return projects
}
