export default function (side=false) {
    const projects = ref([] as ProjectT[])

    queryCollection('projects')
        .where('side', '=', side)
        .order('year_to','DESC')
        .all()
        .then(res=> projects.value = res)
    return projects
}
