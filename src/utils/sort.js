// 升序
export const upId = (data) => {
    data.sort((a, b) => a.id - b.id);
}
// 降序
export const downId = (data) => {
    data.sort((a, b) => b.id - a.id);
}

// 升序
export const upTitle = (data) => {
    data.sort((a, b) => a.title.length - b.title.length);
}

// 降序
export const downTitle = (data) => {
    data.sort((a, b) => b.title.length - a.title.length);
}


// 升序
export const upContent = (data) => {
    data.sort((a, b) => a.content.length - b.content.length);
}

// 降序
export const downContent = (data) => {
    data.sort((a, b) => b.content.length - a.content.length);
}

// 升序 completed --> not completed --> new
export const upStatus = (data) => {
    data.sort((a, b) => {
        if (a.status == 'New' && b.status == 'Not completed' || a.status == 'Not completed' && b.status == 'Completed' || a.status == 'New' && b.status == 'Completed')
            return 1;
        else
            return -1;
    });
}

// 降序 new --> not completed --> completed 
export const downStatus = (data) => {
    data.sort((a, b) => {
        if (a.status == 'Not completed' && b.status == 'New' || a.status == 'completed' && b.status == 'Not Completed' || a.status == 'Completed' && b.status == 'New')
            return 1;
        else
            return -1;
    });
}
