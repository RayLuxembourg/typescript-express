import {Router} from 'express'

const router = Router();

router.get('/',(_req,res)=>{
    const user = {
        firstName:'John',
        lastName:'Daw'
    }

    res.send(user)
})

export const userRouter = router;