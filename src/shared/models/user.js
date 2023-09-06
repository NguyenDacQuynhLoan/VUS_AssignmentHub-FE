export function UserModelFunc(object) {
    if (object != null) {
        return  {
            userCode: object.userCode,
            userName: object.userName,
            gender: object?.gender ?? "",
            password:object.password,
            userRoleCode:object.userRoleCode,
            dateOfBirth: object.dateOfBirth,
            phone: object?.phone ?? "",
            major: object.major,
            location: object?.location ?? "",
            email: object.email,
            assignments: Array.isArray(object.assignments) ? object.assignments : [],
            subjects: Array.isArray(object.assignments) ? object.subjects : []
        }
    }
}