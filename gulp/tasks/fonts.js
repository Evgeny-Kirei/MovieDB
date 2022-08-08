import fs from 'fs';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';

export const otfToTtf = () => {
    //Ищем файлы шрифтов .otf
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "FONTS",
                message: "Error: <%= error.message %"
            }))
        )
        //Конвертируем в .ttf
        .pipe(fonter({
            formats: ['ttf']
        }))
        //Выгружаем в исходную папку
        .pipe (app.gulp.dest(`${app.path.srcFolder}/fonts/`))
}

export const ttfToWoff = () => {
    //Ищем файлы шрифтов .ttf
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "FONTS",
                message: "Error: <%= error.message %"
            }))
        )
        //Конвертируем в .woff
        .pipe(fonter({
            formats: ['woff']
        }))
        //Выгружаем в папку с результатом
        .pipe (app.gulp.dest(`${app.path.build.fonts}`))
        //Ищем файлы шрифтов .ttf
        .pipe (app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
        //Конвертируем в .woff2
        .pipe(ttf2woff2())
        //Выгружаем в папку с результатом
        .pipe (app.gulp.dest(`${app.path.build.fonts}`));
}
export const fontsStyle = () => {
    //Фаил стилей подключения шрифтов
    let fontsFile = `${app.path.srcFolder}/scss/fonts.scss`;
    //Проверяем существуют ли файлы шрифтов
    fs.readdir(app.path.build.fonts, function (err, fontsFiles) {
        if (fontsFiles) {
            //Проверяем существуют ли файл стилей для подключения шрифтов
            if (!fs.existsSync(fontsFile)) {
                //Если файла нет, то создаем его
                fs.writeFile(fontsFile, '', cb);
                let newFileOnly;
                for (var i = 0; i < fontsFiles.length; i++) {
                    //Записываем подключения шрифтов в фаил стилей
                    let fontFileName = fontsFiles[i].split('.')[0];
                if (newFileOnly !== fontFileName) {
                    let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName;
                    let fontWeight = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName;
                    if (fontWeight.toLowerCase() === 'thin') {
                        fontWeight = 100;
                    } else if (fontWeigh.toLowerCase() === 'extralight') {
                        fontWeight = 200;
                    } else if (fontWeigh.toLowerCase() === 'light') {
                        fontWeight = 300;
                    } else if (fontWeigh.toLowerCase() === 'medium') {
                        fontWeight = 500;
                    } else if (fontWeigh.toLowerCase() === 'semibold') {
                        fontWeight = 600;
                    } else if (fontWeigh.toLowerCase() === 'bold') {
                        fontWeight = 700;
                    } else if (fontWeigh.toLowerCase() === 'extrabold' || fontWeigh.toLowerCase() === 'heavy') {
                        fontWeight = 800;
                    } else if (fontWeigh.toLowerCase() === 'black') {
                        fontWeight = 900;
                    } else {
                        fontWeight = 400;
                    }
                    fs.appendFile(fontsFile, `@font-face {\n\tfont-family: ${fontName};\n\tfont-display: swap;\n\tsrc: url("../fonts/${fontFileName}.woff2") format("woff2");\n\tfont-weight: ${fontWeight};\n\tfont-style: normal;\n}\r\n`, cb);
                    newFileOnly = fontFileName; 
                }    
              }
            } else {
                //Если фаил есть , выводим сообщение
                console.log("Фаил scss/fonts.scss уже существуетю Для обновления файла нужно его удалить");
            }
        }
    });

    return app.gulp.src(`${app.path.srcFolder}`);
    function cb() { }
}

