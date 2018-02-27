const express = require('express');
const router = express.Router();

const sequelize = require('../lib/connection');
const Author = require('../models/author')(sequelize);

router.get('/', (req, res, next) => {
    Author.findAndCountAll({
        offset: '',
        limit: 10
    }).then(result => {
        res.render('authors/index', {
            rows: result.rows,
            count: result.count
        });
    }).catch(next);

});

router.post('/add', (req, res, next) => {
    let name = req.param('name') || '';

    if (name.length === 0) {
        req.flash('error', 'Name is empty');
        return res.redirect('/authors/add');
    } 
    Author.build({
        name: name
    }).save()
    .then(() => {
        req.flash('success', 'Author has added successfully!');
        return res.redirect('/authors/add');
    }).catch(e => {
        req.flash(e);
        return res.redirect('/authors/add');
    })
});

router.get('/:id/edit/', (req, res, next) => {
    let id = req.param('id');
    let name = req.param('name');
    Author.findById(id).then(author => {
        if (author == null){
            res.status = 404;
            return next();
        }
        Author.update({name: name}, {
            where: {
                id: author.get('id')
            }
        }).then(()=>{
            req.flash('success', 'Author has edited successfully!');
            return res.redirect('/authors');
        })
    }).catch(e => {
        req.flash(e);
        return res.redirect('/authors');
    });
});

router.get('/:id/del', (req, res, next) => {
    let id =rq.param('id');
    Author.destroy({
        where: {
            id: id
        }
    }).then(del => {
        del ? res.flash('success', '') : res.send('Error');
        return res.redirect('/authors');
    }).catch(e => {
        req.flash(e);
        return res.redirect('/authors');
    });
});

module.exports = router;